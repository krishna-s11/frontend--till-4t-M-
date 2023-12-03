import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FaqPage = () => {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
  const handleOpen = (value) => {
    if(alwaysOpen){
      setAlwaysOpen(false)
    }
    setOpen(open === value ? 0 : value);
  };
  const handleAlwaysOpen = () => {
    if(open!==0){
      setOpen(0)
    }
    setAlwaysOpen((cur) => !cur)
  };
  const faqs = [
    {
      question: 'What is the swinger lifestyle?',
      answer: 'IThe swinger lifestyle is a form of consensual non-monogamy where individuals or couples engage in sexual activities with others outside their primary relationship. It often involves couples swapping partners for sexual experiences, but the extent of involvement varies from soft swaps (limited to certain activities) to full swaps (engaging in intercourse).',
    },
    {
      question: 'Is swinging the same as an open relationship or polyamory?',
      answer: 'No, swinging is distinct from open relationships and polyamory. Swinging primarily focuses on sexual exploration and typically involves couples engaging in sexual activities with others. Open relationships and polyamory, on the other hand, emphasize emotional connections and can involve multiple romantic and sexual partners.      ',
    },
    {
      question: 'What should I do if I forgot my password?',
      answer: 'No, swinging is distinct from open relationships and polyamory. Swinging primarily focuses on sexual exploration and typically involves couples engaging in sexual activities with others. Open relationships and polyamory, on the other hand, emphasize emotional connections and can involve multiple romantic and sexual partners.',

    },
    {
      question: 'What should I expect at a swinger event or party?',
      answer: "Expectations can vary depending on the event and location. Typically, swinger events provide a safe, non-judgmental space for adults to socialize, dance, and potentially engage in sexual activities if they choose to. It's important to respect the rules and guidelines of the event and obtain clear consent before initiating any sexual activity.",
    }, {
      question: 'Can anyone become a swinger?',
      answer: "Swinging is consensual, and participation is entirely voluntary. Anyone interested in exploring the lifestyle can do so, provided they communicate openly, respect boundaries, and prioritize safety and consent. It's essential to be honest about your intentions and desires with potential partners.",
    },
    {
    question: 'How do I deal with jealousy in the swinger lifestyle?',
      answer: "Jealousy is a common emotion in any non-monogamous relationship. Open and honest communication with your partner(s) is key to addressing jealousy. Establish boundaries and agreements that make both partners comfortable. It's also essential to work on self-confidence and self-esteem to better manage jealousy when it arises.",
    },
    {
      question: 'Are swingers at risk of contracting sexually transmitted infections (STIs)?',
      answer: "Any sexual activity carries some risk of STIs. Swingers should use protection, get regular STI testing, and be open about their sexual health with potential partners. Responsible sexual behaviour and safer sex practices are essential in minimizing these risks.Remember that the swinger lifestyle is about consent, communication, and exploring consensual sexual experiences with like-minded individuals. It's important to prioritize the emotional and physical well-being of all parties involved in any swinger encounter.",
    },
    
    {
      question: 'How do I find users near me?',
      answer: 'To discover users near you, go to the "Nearby" feature in the app. This section displays profiles of users in your proximity. Adjust your location settings for accurate results and explore potential matches nearby.',
    },
    {
      question: 'Can I create events on Hot-Date app?',
      answer: 'Yes, you can! Hot-Date app allows users to create events. Simply go to the "Events" section, click on "Create Event," fill in the details, and invite other users to join. Its a great way to plan and share exciting activities.',
    },
    {
      question: 'How can I join events created by other users?',
      answer: 'To join an event, visit the "Events" section and explore the available activities. Click on an event you are interested in and select the Join option. You can then chat with other participants and coordinate details.',
    },
    {
      question: 'What is a Club Card, and how can I create one?',
      answer: 'Club Cards are created by party and club owners to invite users to join their events. If you own a venue, go to the "Club Cards" section, click on "Create Card," and fill in the details. Users can discover and join your club events through these cards.',
    },
    {
      question: 'How can I send a friend request on Hot-Date app?',
      answer: 'To send a friend request, visit the profile of the user you want to connect with. Click on the "Add Friend" button, and once they accept your request, you can start chatting and planning activities together.',
    },
    {
      question: 'Is there a chat feature on Hot-Date app?',
      answer: 'Yes, Hot-Date app includes a chat feature. Once you match with someone or become friends, you can start chatting within the app. Use the chat to get to know each other better, plan events, or share exciting updates.',
    },
    {
      question: "How do I find other swingers or lifestyle events?",
      answer:
        "There are various ways to connect with the swinger community:\n" +
        "- Online swinger websites and forums: Many dedicated websites and forums exist where swingers can create profiles, interact with others, and find events in their area.\n" +
        "- Swinger clubs and parties: Many cities have swinger clubs or host lifestyle parties where like-minded individuals can meet and socialize.\n" +
        "- Social media: Some swingers use social media platforms to connect and organize events discreetly."
    },
    {
      question: "How can I ensure safety in the swinger lifestyle?",
      answer:
        "Safety is paramount in the swinger community. Here are some key safety tips:\n" +
        "- Communicate openly with your partner(s) about boundaries, desires, and limits.\n" +
        "- Use protection, such as condoms, to prevent the spread of sexually transmitted infections.\n" +
        "- Verify consent from all parties involved before engaging in any sexual activity.\n" +
        "- Get to know potential partners and exchange relevant health information.\n" +
        "- Trust your instincts and leave any situation that makes you uncomfortable."
    },
    {
      question: "What should I expect at a swinger event or party?",
      answer:
        "Expectations can vary depending on the event and location. Typically, swinger events provide a safe, non-judgmental space for adults to socialize, dance, and potentially engage in sexual activities if they choose to. It’s important to respect the rules and guidelines of the event and obtain clear consent before initiating any sexual activity."
    },
    {
      question: "Can anyone become a swinger?",
      answer:
        "Swinging is consensual, and participation is entirely voluntary. Anyone interested in exploring the lifestyle can do so, provided they communicate openly, respect boundaries, and prioritize safety and consent. It’s essential to be honest about your intentions and desires with potential partners."
    },
    {
      question: "How do I deal with jealousy in the swinger lifestyle?",
      answer:
        "Jealousy is a common emotion in any non-monogamous relationship. Open and honest communication with your partner(s) is key to addressing jealousy. Establish boundaries and agreements that make both partners comfortable. It’s also essential to work on self-confidence and self-esteem to better manage jealousy when it arises."
    },
    {
      question: "Are swingers at risk of contracting sexually transmitted infections (STIs)?",
      answer:
        "Any sexual activity carries some risk of STIs. Swingers should use protection, get regular STI testing, and be open about their sexual health with potential partners. Responsible sexual behavior and safer sex practices are essential in minimizing these risks.\n" + 
        "Remember that the swinger lifestyle is about consent, communication, and exploring consensual sexual experiences with like-minded individuals. It's important to prioritize the emotional and physical well-being of all parties involved in any swinger encounter.\n" +
        "Why is it crucial to discuss rules and boundaries before swinging, and what are some key considerations to keep in mind during this conversation?\n" + 
        "1.	Full Communication: Both partners must agree to open and honest communication about their feelings, desires, and concerns throughout the swinging experience.\n" +
        "2. Consent: Agree that consent is paramount, and either partner can veto a situation or change their mind at any time without judgment.\n" +
        "3.	Safe Sex: Make it a rule to always practice safe sex with other partners and to regularly get tested for sexually transmitted infections.\n"+
        "4.	Boundaries on Locations: Decide if you're comfortable swinging only at designated parties or clubs, or if private encounters are acceptable and under what circumstances\n "+
        "5. Privacy: Establish boundaries regarding sharing photos or information about your swinging experiences with others outside your partnership.\n" +
        "6. Limits on Intimacy: Determine the level of intimacy you're comfortable with, such as whether kissing, oral sex, or penetrative sex with others is permitted.\n" +
        "7.	Screening Partners: Decide if you'll both have an equal say in choosing potential partners and establish criteria for selecting them.\n" +
        "8. Frequency and Timing: Establish how often you'll engage in swinging activities and whether there are time restrictions (e.g., only on weekends).\n" +
        "9. Alcohol and Drugs: Discuss whether alcohol or recreational drugs will be involved and, if so, set limits on their use to ensure consent and safety.\n "+
        "10. Aftercare: Agree on a plan for emotional aftercare, such as spending time together, discussing feelings, or seeking counselling if needed, to ensure both partners feel supported and secure.\n "
    },
    {
      question: "What are the key considerations in the swinger lifestyle?",
      answer:
        "Remember that the swinger lifestyle is about consent, communication, and exploring consensual sexual experiences with like-minded individuals. It’s important to prioritize the emotional and physical well-being of all parties involved in any swinger encounter."
    },
    {
      question:"Before starting swinging, what are some rules and boundaries that my partner and I should discuss?",
      answer:"1. No 'Taking One for the Team\n "+
      "This means that neither of you will engage in play if one of you isn't attracted to your play partner or simply doesn't feel like playing at that particular time. It's important that neither of you endures something you dislike just for the sake of the other's enjoyment. Understand each other's preferences in a play partner and establish clear ways to communicate whether it's a yes or no for proceeding. Using code words or signals can be helpful in this regard.\n"+
      "2.	NO KISSING RULE\n"+
      "This rule is common for beginners, but many often let it go as they become more comfortable. If you're new to intimacy and kissing feels more comfortable, stick to this rule. Some people find it challenging to avoid kissing during passionate moments, and if your partner refuses to engage without it, it's their loss!\n"+

      "3.	NO FULL SWAP (NO PENETRATION) RULE\n"+
      "Another common rule is the 'no full swap' rule, where some couples prefer only engaging in soft swap activities. This includes kissing, touching, groping, and oral activities, which can be incredibly passionate. Many newcomers to the lifestyle start with this rule, and some experienced individuals transition to it over time. It can help manage emotional concerns, alleviate worries about sexually transmitted infections, and reduce the pressure and performance anxiety associated with full swapping.\n"+
      "4.	SAME ROOM VERSUS SEPARATE ROOM PLAY RULE\n"+
      "Choosing whether to engage in same-room or separate-room play comes with its own set of pros and cons. It's essential to discuss and understand what works as a positive and what might be a challenge for both you and your partner. Some couples are comfortable with separate play dates, while others may only be okay with women playing independently. There are also those who prefer everyone to engage together consistently. With numerous potential arrangements, it's crucial to plan based on what you both want, need, and desire. Be open to adjusting this rule – and any others on your list – over time; people, relationships, and emotions evolve. Your rules should adapt to your growth and changes as well.\n"+
      "5.	NO ANAL RULE\n"+
      "In the swinging lifestyle, some couples choose to have a 'no anal' rule. While anal play is more common in this community than in the mainstream world, it's essential to communicate and set boundaries that make both partners comfortable. Skilled swingers know how to navigate sensitive areas, but it's entirely up to you and your partner whether you want to explore anal activities. Some may find the experience enjoyable with the right partner, while others might prefer to keep it exclusive. Ultimately, it's your choice and should align with your preferences and comfort levels.\n"+
      "6.	NO REPEATS RULE\n"+
      "Some couples follow the 'no repeats' rule, which means they won't engage with the same couple within a specified time frame (like one month, six months, or a year). This helps prevent emotional connections and keeps swinging focused on physical pleasure rather than personal attachments. Many swingers appreciate this rule as it allows them to explore a variety of sexual experiences. However, it's important to adjust this rule based on your own preferences and comfort level.\n"+
      "7.	NO SOLO COMMUNICATION RULE\n"+
      "To avoid surprises and misunderstandings, many couples adopt the 'no solo communication' rule. In common scenarios, one person, often the man, manages the online profiles to shield the woman from dealing with fake individuals. When you connect with a genuine couple, it's important to establish how communication will unfold. Some prefer online flirting, while others find it emotionally challenging. One solution is to avoid solo talks and opt for group messages or platforms like KIK, making communication smoother than coordinating group calls.\n"+
      "8.	CONDOMS REQUIRED RULE\n"+
      "Before entering the swinging scene, have a conversation with your partner about your condom policy. Determine whether you require condoms for oral activities and if you're comfortable playing with couples who may not always use condoms. In the swinging lifestyle, some couples engage in intercourse without condoms, so it's crucial to discuss and agree upon your comfort zone with your partner before participating in any swinging sessions. Always be mindful of potential health risks before considering play without condoms.\n"+
      "9.	EVADING OR SEEKING UNICORNS RULE\n"+
      "Single women, often referred to as 'unicorns’, are highly sought after in the swinging lifestyle. While they can bring excitement, some unicorns may have specific requests to enhance their comfort and security. Despite their allure, some couples choose to avoid playing with unicorns. Even with an amazing unicorn who does nothing wrong, introducing a third person can sometimes lead to unequal experiences or attention, potentially causing issues in the relationship. To keep things simpler, some couples prefer sticking to interactions with other couples, avoiding any feelings of exclusion or oversight.\n"+
      "10.	DRINKING LIMITS RULE\n"+
      "Swinging parties often involve a lot of drinks and alcohol, but excessive drinking can hinder the enjoyment of a swinging session. Similar to drug use, overindulgence in alcohol can lead to unintentional rule-breaking. It's important to establish clear rules on alcohol consumption levels. Many swingers tend to drink moderately to avoid alcohol-related mishaps in the company of attractive partners. This rule is particularly helpful for newcomers who may turn to alcohol to ease nerves. Be mindful of your alcohol intake and keep an eye on your partner's as well. If someone has had too much to drink, it might be best to take a break or leave early to ensure everyone's well-being.\n"
    }
  ];
  
  
  const accordioncss={
    color:"orange",
    fontWeignt:"500",
    fontSize:"16px"
  }

  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[320px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">FAQ</h3>
          <p className="text-lg">Frequently Asked Questions</p>
        </div>
      </div>
      <div className="pt-10 container mx-auto">
        <div className="grid gap-y-2 max-w-6xl mx-auto">
          
    
   <Accordion style={{ borderLeft: alwaysOpen  ? '4px solid #f19815' : 'none',paddingLeft: alwaysOpen ? '4px' : 'none' }} open={alwaysOpen}>
        <AccordionHeader onClick={handleAlwaysOpen}>Can I use the Hot-Date app on multiple devices?</AccordionHeader>
        <AccordionBody style={{color:"orange",fontSize:"16px"}}>Yes, you can use the Hot-Date app on multiple devices. Simply log in with your account credentials, and your data will be synchronized across all your devices.

        </AccordionBody>
      </Accordion>
      {
  faqs.map((el, i) => (
    <Accordion key={i + 1} open={open === i + 1}  style={{ borderLeft: open === i + 1 ? '4px solid #f19815' : 'none',paddingLeft: open === i + 1 ? '4px' : 'none' }} icon={<Icon id={i + 1} open={open} /> }>
      <AccordionHeader
        className="text-lg font-medium"
        onClick={() => handleOpen(i + 1)}
      >
        {el.question}
      </AccordionHeader>
      <AccordionBody style={open === i + 1 && accordioncss}>
        {el.answer.includes('\n') ? (
          <ul>
            {el.answer.split('\n').map((item, index) => (
              <li key={index}>{index>=1 && `${index}).`}{item}</li>
            ))
            }
          </ul>
        ) : (
          el.answer
        )}
      </AccordionBody>
    </Accordion>
  ))
}

        </div>
      </div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #Best Adult Dating Site
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
