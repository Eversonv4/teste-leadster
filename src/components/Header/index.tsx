import Image from "next/image";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src="/assets/company/logo.png"
        height={36}
        width={170}
        alt="Leadster logo"
        priority={true}
      />
    </HeaderContainer>
  );
}
