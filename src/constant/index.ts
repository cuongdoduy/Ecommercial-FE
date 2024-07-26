import Facebook from "public/facebook.svg";
import Tiktok from "public/tiktok.svg";
import Youtube from "public/youtube.svg";

import Image1 from "public/categories/casual.svg";
import Image2 from "public/categories/formal.svg";
import Image3 from "public/categories/party.svg";
import Image4 from "public/categories/gym.svg";

import ApplicationImage from "public/application.svg";
import DisableAppliactionImage from "public/application_notactive.svg";

import CalvinKlein from "public/brands/calvin_klein.svg";
import Gucci from "public/brands/gucci.svg";
import Prada from "public/brands/prada.svg";
import Versace from "public/brands/versace.svg";
import Zara from "public/brands/zara.svg";

import { StaticImageData } from "next/image";

type NavItem = {
  name: string;
  url: string;
};

type SocialItem = {
  name: string;
  url: string;
  icon: string;
};

export const navItems: NavItem[] = [
  {
    name: "All Clothes",
    url: "/products",
  },
  {
    name: "On Sale",
    url: "#",
  },
  {
    name: "New Arrivals",
    url: "#",
  },
  {
    name: "Brands",
    url: "#",
  },
];

export const footerItems: Array<{
  groupTitle: string;
  items: NavItem[];
}> = [
  {
    groupTitle: "Company",
    items: [
      {
        name: "About",
        url: "/about-us",
      },
      {
        name: "Features",
        url: "/features",
      },
      {
        name: "Works",
        url: "/works",
      },
      {
        name: "Career",
        url: "/career",
      },
    ],
  },
  {
    groupTitle: "Help",
    items: [
      {
        name: "Customer Support",
        url: "/customer-support",
      },
      {
        name: "Delivery Details",
        url: "/delivery-details",
      },
      {
        name: "Terms & Conditions",
        url: "/terms-and-conditions",
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
  {
    groupTitle: "FAQs",
    items: [
      {
        name: "Account",
        url: "/faq/account",
      },
      {
        name: "Manage Delivery",
        url: "/faq/manage-delivery",
      },
      {
        name: "Order & Shipping",
        url: "/faq/order-shipping",
      },
      {
        name: "Payment",
        url: "/faq/payment",
      },
    ],
  },
  {
    groupTitle: "Resources",
    items: [
      {
        name: "Free Ebooks",
        url: "/resources/free-ebooks",
      },
      {
        name: "Development Tutorial",
        url: "/resources/development-tutorial",
      },
      {
        name: "How to - Blog",
        url: "/resources/how-to-blog",
      },
      {
        name: "Youtube Playlist",
        url: "/resources/youtube-playlist",
      },
    ],
  },
];

export const socialItems: SocialItem[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/",
    icon: Tiktok,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/",
    icon: Youtube,
  },
];

export const categoryItems: Array<{
  background: string | StaticImageData;
  title: string;
  url: string;
}> = [
  {
    background: Image1,
    title: "Casual",
    url: "/categories/casual",
  },
  {
    background: Image2,
    title: "Formal",
    url: "/categories/formal",
  },
  {
    background: Image3,
    title: "Party",
    url: "/categories/party",
  },
  {
    background: Image4,
    title: "Gym",
    url: "/categories/gym",
  },
];

export const homePageNavItems: Array<{
  name: string;
  active_icon?: string | StaticImageData;
  disactive_icon?: string | StaticImageData;
}> = [
  {
    name: "All",
    active_icon: ApplicationImage,
    disactive_icon: DisableAppliactionImage,
  },
  {
    name: "Categories",
  },
  {
    name: "Best Sellers",
  },
  {
    name: "Hot Deals",
  },
  {
    name: "Recommended Products",
  },
];

interface Brand {
  logo: string | StaticImageData;
  name: string;
  url: string;
}

export const brandItems: Brand[] = [
  {
    logo: Versace,
    name: "Versace",
    url: "/brands/versace",
  },
  {
    logo: Gucci,
    name: "Gucci",
    url: "/brands/gucci",
  },
  {
    logo: Prada,
    name: "Prada",
    url: "/brands/prada",
  },
  {
    logo: CalvinKlein,
    name: "Calvin Klein",
    url: "/brands/calvin-klein",
  },
  {
    logo: Zara,
    name: "Zara",
    url: "/brands/zara",
  },
];

export const shirtViewImages: string[] | StaticImageData[] = [
  "/clothes/shirt_view_1.png",
  "/clothes/shirt_view_2.png",
  "/clothes/shirt_view_3.png",
];

export interface Review {
  startRate: number;
  name: string;
  review_desc: string;
  date: string;
}

export const reviews: Review[] = [
  {
    startRate: 5,
    name: "John Doe",
    review_desc:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2024-06-01",
  },
  {
    startRate: 4,
    name: "Jane Smith",
    review_desc:
      "Soft fabric and careful stitching. The shirt looks great and is very dynamic.",
    date: "2024-06-05",
  },
  {
    startRate: 3,
    name: "Mike Johnson",
    review_desc:
      "The shirt has a nice design but isn't very durable after a few washes.",
    date: "2024-06-10",
  },
  {
    startRate: 5,
    name: "Emily Davis",
    review_desc: "Very satisfied with the quality and fast delivery service.",
    date: "2024-06-15",
  },
  {
    startRate: 4,
    name: "Chris Lee",
    review_desc: "Comfortable and stylish shirt, but a bit expensive.",
    date: "2024-06-20",
  },
];
