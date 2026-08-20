import FAQCard from '../components/faq/FAQCard'
import FAQSection from '../components/faq/FAQSection'
import faqsAPI from '@/app/services/faqs/faqs.service';

export default async function FAQPage({params}: {params: {slug: string}}) {
    const faqPages = await faqsAPI.getFaqsPages();
    const faqPage = faqPages.data.find((page) => page.attributes.slug === params.slug);
    return (
        <>
            <main >
                <h1>Preguntas Frecuentes</h1>
                <FAQSection sections={faqPages.data} />

               
            
            </main>

    
        </>
    )
}