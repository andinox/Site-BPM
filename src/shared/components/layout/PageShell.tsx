import type { ComponentPropsWithoutRef, ReactNode } from "react";
import StaggeredMenu from "@/shared/components/navigation/StaggeredMenu";
import { navigationItems, socialLinks } from "@/shared/config/navigation";

type MainElementProps = Omit<ComponentPropsWithoutRef<"main">, "className" | "children">;

type PageShellProps = MainElementProps & {
  pageClassName: string;
  children: ReactNode;
};

const PageShell = ({ pageClassName, children, ...mainElementProps }: PageShellProps) => {
  return (
    <main className={pageClassName} {...mainElementProps}>
      <StaggeredMenu items={navigationItems} socialItems={socialLinks} />
      {children}
    </main>
  );
};

export default PageShell;
