
import faqsAPI from '@/app/services/faqs/faqs.service';
import FAQSection from '../../components/faq/FAQSection'
export default async function FAQPage({params}: {params: {slug: string}}) {
    const faqsPages = await faqsAPI.getFaqsPages();

    const faqPage = faqsPages.data.find((page) => page.attributes.slug === `/${params.slug}`);
    return (

        <>
            <main >
                <h1>Preguntas Frecuentes</h1>
                <FAQSection sections={faqsPages.data} />

                 <section className='flex flex-col'>

                    <h2>Respuestas a la sección ...</h2>
                    <h3>{faqPage?.attributes.title}</h3>
                    <p>{faqPage?.attributes.body}</p>
                </section>     

            </main>

    
        </>
    )
}