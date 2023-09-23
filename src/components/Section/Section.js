import { SectionWrapper, HeaderSection } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <SectionWrapper>
            <HeaderSection>{title}</HeaderSection>
            {children}
        </SectionWrapper>
    );
}