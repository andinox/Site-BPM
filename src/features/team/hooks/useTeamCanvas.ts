import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent
} from "react";
import {
  TEAM_CANVAS_HEIGHT,
  TEAM_CANVAS_WIDTH,
  TEAM_MAX_SCALE,
  TEAM_MIN_SCALE
} from "@/features/team/constants";
import type { CanvasTransform } from "@/features/team/types";
import { clamp } from "@/shared/lib/math/clamp";

type PointerDragState = {
  pointerId: number;
  startClientX: number;
  startClientY: number;
  originX: number;
  originY: number;
};

const DEFAULT_TRANSFORM: CanvasTransform = {
  x: 0,
  y: 0,
  scale: 1
};

const createCanvasTransformStyle = (transform: CanvasTransform): CSSProperties => {
  return {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`
  };
};

export const useTeamCanvas = () => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<PointerDragState | null>(null);
  const transformRef = useRef<CanvasTransform>(DEFAULT_TRANSFORM);

  const [transform, setTransform] = useState<CanvasTransform>(DEFAULT_TRANSFORM);
  const [isDragging, setIsDragging] = useState(false);

  transformRef.current = transform;

  // ----- Centering helpers -----
  const centerView = useCallback((scaleOverride?: number) => {
    if (!viewportRef.current) {
      return;
    }

    const scale = scaleOverride ?? transformRef.current.scale;
    const viewportRect = viewportRef.current.getBoundingClientRect();

    setTransform({
      scale,
      x: (viewportRect.width - TEAM_CANVAS_WIDTH * scale) / 2,
      y: (viewportRect.height - TEAM_CANVAS_HEIGHT * scale) / 2
    });
  }, []);

  const zoomBy = useCallback((factor: number) => {
    if (!viewportRef.current) {
      return;
    }

    const viewportRect = viewportRef.current.getBoundingClientRect();
    const pivotX = viewportRect.width / 2;
    const pivotY = viewportRect.height / 2;

    setTransform((previousTransform) => {
      const nextScale = clamp(previousTransform.scale * factor, TEAM_MIN_SCALE, TEAM_MAX_SCALE);
      if (nextScale === previousTransform.scale) {
        return previousTransform;
      }

      const contentX = (pivotX - previousTransform.x) / previousTransform.scale;
      const contentY = (pivotY - previousTransform.y) / previousTransform.scale;

      return {
        scale: nextScale,
        x: pivotX - contentX * nextScale,
        y: pivotY - contentY * nextScale
      };
    });
  }, []);

  // ----- Drag handlers -----
  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    dragStateRef.current = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      originX: transformRef.current.x,
      originY: transformRef.current.y
    };

    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  }, []);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState) {
      return;
    }

    setTransform((previousTransform) => ({
      ...previousTransform,
      x: dragState.originX + (event.clientX - dragState.startClientX),
      y: dragState.originY + (event.clientY - dragState.startClientY)
    }));
  }, []);

  const stopDragging = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(dragState.pointerId)) {
      event.currentTarget.releasePointerCapture(dragState.pointerId);
    }

    dragStateRef.current = null;
    setIsDragging(false);
  }, []);

  // ----- Zoom handlers -----
  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const viewportRect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - viewportRect.left;
    const pointerY = event.clientY - viewportRect.top;

    setTransform((previousTransform) => {
      const zoomDelta = -event.deltaY * 0.0018;
      const nextScale = clamp(previousTransform.scale + zoomDelta, TEAM_MIN_SCALE, TEAM_MAX_SCALE);
      if (nextScale === previousTransform.scale) {
        return previousTransform;
      }

      const contentX = (pointerX - previousTransform.x) / previousTransform.scale;
      const contentY = (pointerY - previousTransform.y) / previousTransform.scale;

      return {
        scale: nextScale,
        x: pointerX - contentX * nextScale,
        y: pointerY - contentY * nextScale
      };
    });
  }, []);

  const resetView = useCallback(() => {
    centerView(1);
  }, [centerView]);

  const zoomIn = useCallback(() => {
    zoomBy(1.12);
  }, [zoomBy]);

  const zoomOut = useCallback(() => {
    zoomBy(0.9);
  }, [zoomBy]);

  useEffect(() => {
    centerView(1);

    const handleResize = () => {
      centerView();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [centerView]);

  const canvasTransformStyle = useMemo(() => {
    return createCanvasTransformStyle(transform);
  }, [transform]);

  return {
    viewportRef,
    isDragging,
    canvasTransformStyle,
    zoomIn,
    zoomOut,
    resetView,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp: stopDragging,
    handlePointerCancel: stopDragging,
    handleWheel
  };
};
