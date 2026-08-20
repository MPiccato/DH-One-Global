

import { StrapiResultType } from "@/app/types/strapi.types";
import { httpGetPublic } from "../common/http.service";

import { FAQPageType } from "@/app/types/faq-page.type";
import { strapiGet } from "../common/strapi.service";



class FaqsAPI {
    getFaqsPages = async (): Promise<StrapiResultType<FAQPageType>> => 
        strapiGet(`/faq-pages`);
    
}

const faqsAPI = new FaqsAPI();

export default faqsAPI;
