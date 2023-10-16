import {ServiceType} from "../components/views/Service";

export type DataServiceType = {
    isMain: boolean;
    subView: ServiceType;
    class: string;
    image: string;
    title: string;
    short: string;
    desc: string;
    workTag: string;
    link: string;
}

export const DataServices:DataServiceType[] = [
    {
        isMain: true,
        subView: 'web-applications',
        class: "web-application",
        image: "/img/web-application-development.svg",
        title: "<span>Web application</span> <span class='display-block'>development</span>",
        short: "Web Application Development",
        desc: "I develop PHP and JavaScript web applications with Symfony and AngularJS",
        workTag: "web-application-development",
        link: "/freelance-software-development/web-applications"
    },
    {
        isMain: true,
        subView: 'mobile-cross-platform-applications',
        class: "mobile-cross-platform",
        image: "/img/cross-platform-development.svg",
        title: "<span>Mobile cross-platform</span> <span style='display:block;'>application development</span>",
        short: "Mobile development",
        desc: "<span>I develop mobile phonegap applications</span> <span>for iOS, Android, and Windows phone</span>",
        workTag: "mobile-development",
        link: "/freelance-software-development/mobile-cross-platform-applications"
    },
    {
        isMain: true,
        subView: 'e-commerce-websites',
        class: "e-commerce",
        image: "/img/online-store-development.svg",
        title: "<span>E-commerce</span> <span class='display-block'>development</span>",
        short: "E-commerce development",
        desc: "<span>I develop responsive online stores</span> <span>with Woocommerce and Magento.</span>",
        workTag: "ecommerce-development",
        link: "/freelance-software-development/e-commerce-websites"
    },
    {
        isMain: true,
        subView: 'wordpress-and-silverstripe-responsive-websites',
        class: "open-source",
        image: "/img/open-source-cms-development.svg",
        title: "<span>Responsive website</span> <span class='display-block'>development</span>",
        short: "Responsive website development",
        desc: "<span>I develop responsive <span class='text-nowrap'>open-source</span> websites</span> <span>with Wordpress or Silverstripe</span>",
        workTag: "responsive-website-development",
        link: "/freelance-software-development/wordpress-and-silverstripe-responsive-websites"
    }
]