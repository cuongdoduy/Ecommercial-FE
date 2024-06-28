import Facebook from "public/facebook.svg";
import Tiktok from "public/tiktok.svg";
import Youtube from "public/youtube.svg";

import Image1 from "public/categories/casual.svg";
import Image2 from "public/categories/formal.svg";
import Image3 from "public/categories/party.svg";
import Image4 from "public/categories/gym.svg";

import ShirtView1 from "public/clothes/shirt_view_1.png";
import ShirtView2 from "public/clothes/shirt_view_2.png";
import ShirtView3 from "public/clothes/shirt_view_3.png";

import ProductImage from "public/productImg.jpg";
import ApplicationImage from "public/application.svg";
import DisableAppliactionImage from "public/application_notactive.svg";

import CalvinKlein from "public/brands/calvin_klein.svg";
import Gucci from "public/brands/gucci.svg";
import Prada from "public/brands/prada.svg";
import Versace from "public/brands/versace.svg";
import Zara from "public/brands/zara.svg";

import { StaticImageData } from "next/image";
import { ProductProps } from "@/components/Product";

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
    name: "Shop",
    url: "/",
  },
  {
    name: "On Sale",
    url: "/sale",
  },
  {
    name: "New Arrivals",
    url: "/new-arrivals",
  },
  {
    name: "Brands",
    url: "/brands",
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

export const productItems: Array<ProductProps> = [
  {
    name: "Fish Sauce Squid Brand",
    price: 865.99,
    image: ProductImage,
    discount: 10,
    starRating: 4,
  },
  {
    name: "Fish Sauce Squid Brand",
    price: 865.99,
    image: ProductImage,
    starRating: 3,
    discount: 10,
  },
  {
    name: "Fish Sauce Squid Brand",
    price: 865.99,
    image: ProductImage,
    starRating: 2,
    discount: 10,
  },
  {
    name: "Fish Sauce Squid Brand",
    price: 865.99,
    image: ProductImage,
    starRating: 5,
    discount: 10,
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
  '/clothes/shirt_view_1.png',
  '/clothes/shirt_view_2.png',
  '/clothes/shirt_view_3.png',
];
