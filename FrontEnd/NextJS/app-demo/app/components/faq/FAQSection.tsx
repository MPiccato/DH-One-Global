import FAQCard from "./FAQCard"
import { FAQPageType } from "@/app/types/faq-page.type"

type FAQSectionProps = {
    sections: FAQPageType[]
   
};

const FAQSection = ({sections}: FAQSectionProps) => {
    return <>
        <section >               
            <div className='grid grid-cols-12 gap-4 mb-8'>
                {sections.map((section) => (
                    <FAQCard key={section.attributes.slug} label={section.attributes.title} href={`/faq${section.attributes.slug}`} />
                ))}
                
            </div>
        </section>
  
    </>
}
export default FAQSection;