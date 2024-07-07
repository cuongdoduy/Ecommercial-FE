import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ReviewItem from "@/components/ReviewItem";
import { Review } from "@/constant";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

interface UnderlineTabsProps {
  reviews: Review[];
  description: string;
}

export function UnderlineTabs({ reviews, description }: UnderlineTabsProps) {
  const [activeTab, setActiveTab] = React.useState("Rating & Reviews");
  const [open, setOpen] = React.useState(-1);

  const handleOpen = (value: number) => setOpen(open === value ? -1 : value);
  const data = [
    {
      label: "Product Details",
      value: "Product Details",
      data: [],
    },
    {
      label: "Rating & Reviews",
      value: "Rating & Reviews",
      data: [],
    },
    {
      label: "FAQs",
      value: "FAQs",
      data: [
        {
          title: "What materials are used in the ADH01 shirt?",
          answer: [
            "The ADH01 shirt is made from a blend of mesh pique fabric, polyester, and cool stretch fabric.",
          ],
        },
        {
          title: "How do I know what size to order?",
          answer: [
            "Refer to our size chart provided on the product page.",
            "If you're between sizes, we recommend ordering the larger size for a comfortable fit.",
          ],
        },
        {
          title: "How should I care for my ADH01 shirt?",
          answer: [
            "Machine wash cold with like colors.",
            "Do not bleach.",
            "Tumble dry low or hang dry.",
            "Iron on low if necessary.",
          ],
        },
        {
          title: "Can I return or exchange the ADH01 shirt if it doesn't fit?",
          answer: [
            "Yes, we offer a 30-day return and exchange policy.",
            "The shirt must be in its original condition and packaging.",
            "Contact our customer service to initiate a return or exchange.",
          ],
        },
        {
          title: "What are the delivery options available?",
          answer: [
            "We offer nationwide delivery with a commitment to on-time delivery.",
            "Express and standard shipping options are available.",
          ],
        },
        {
          title: "Is there any logo or branding on the ADH01 shirt?",
          answer: [
            "Yes, the ADH01 shirt features a prominent logo printed on the chest.",
          ],
        },
        {
          title: "What technology is used for printing the logo?",
          answer: [
            "We use heat transfer printing technology for a durable and vibrant logo.",
          ],
        },
      ],
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-[black] font-semibold" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, data }, index) => (
          <TabPanel key={value} value={value}>
            <div className="space-y-4">
              {index == 0 && (
                <div
                  className="text-body my-2 text-[#A9A9A9]"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></div>
              )}
              {index == 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {reviews.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                  ))}
                </div>
              )}

              {index == 2 && (
                <div className="mb-6">
                  {data.map((question, index) => {
                    return (
                      <Accordion
                        key={index}
                        open={open === index}
                        icon={<Icon id={index} open={open} />}
                      >
                        <AccordionHeader
                          className="!text-h5"
                          onClick={() => handleOpen(index)}
                        >
                          {index + 1}. {question.title}
                        </AccordionHeader>
                        <AccordionBody className="!text-body">
                          {question.answer.map((answer, answerIndex) => {
                            return (
                              <p className="text-body" key={answerIndex}>
                                {answer}
                              </p>
                            );
                          })}
                        </AccordionBody>
                      </Accordion>
                    );
                  })}
                </div>
              )}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
