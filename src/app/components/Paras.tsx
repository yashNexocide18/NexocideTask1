import Para from "./Para";
import Grid from "./Grid";
import Lpara from "./Lpara";
export default function Paras() {
    return (
        <div className="w-[80vw] mx-auto text-gray-800   leading-[2.5rem] h-fit   ">
            <div className="w-[50vw] mx-auto">

                <Para
                    title="The Challenge of Standing Out Online"
                    paragraphs={[
                        `Every day, millions of businesses compete for visibility online,making it increasingly difficult to capture the attention of potential customers.Organic search results are highly sought after, but earning a top spot on Google takes time and consistent effort.Meanwhile, PPC ads promise instant visibility but can quickly drain your budget if not executed effectively.`,

                        `For small businesses with limited resources,this dilemma can feel like an impossible balancing act.Do you play the long game with organic strategies or opt for quick wins with PPC?`
                    ]}
                />
                <Para
                    title="Comparing PPC and Organic Marketing"
                    paragraphs={[
                        `Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges, making them effective for different business needs. PPC is designed to deliver immediate results by securing top placements on search engines or social media platforms, providing businesses with instant visibility. It allows for orecise targeting based on factors like demographics, behavior, and location, offering flexibility to start small and scale as needed. However, PPC can become expensive quickly, particularly in competitive industries, and its results are short-lived since traffic stops when the campaign ends.`,

                        `In contrast, organic marketing focuses on building a strong, sustainable presence through strategies like search engine optimization (SEO) and content creation. This approach builds trust and credibility over time, delivering consistent traffic without the need for ongoing ad spend. while the results can take longer to materialize and are less immediate than PPC, organic marketing provides long-term benefits that make it a valuable strategy for sustained growth.`
                    ]}
                />
                <div className="mt-20">
                    <h1 className="text-3xl font-semibold mb-6 text-black tracking-wide">Striking the Right Balance</h1>
                    <div className="flex items-center justify-between gap-8">
                        <div className="h-[15vh] w-[20px] bg-[#B9FF66]"></div>
                        <div><p className="text-2xl leading-[35px] tracking-wide">"PPC and organic marketing aren't rivals—they're teammates. The best strategies combine both to create a holistic approach to growth," says a digital marketing expert</p></div>
                    </div>
                </div>
                <div className="text-justify text-black text-[17px] leading-[1.8] whitespace-pre-line mb-6 mt-10">
                    <p className="mb-6">For instance, a business might use PPC to generate quick traffic for a new product launch while building long-term organic authority through SEO and blogging. Combining these strategies ensures you're reaching your audience now while laying the grounf=dwork for future success.</p>
                    <p>For small businesses with limited resources, this dilemma can feel like an impossible balancing act. Do you play yhe long game with organic strategies or opt for quick wins with PPC?</p>
                </div>
            </div>
            <Grid />
            <Para
                title="Real-World Examples"
                paragraphs={[

                    `PPC and organic marketing have proven effective in different scenarios, and real-world examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to target the search term "best Italian food near me," which led to a remarkable 120% increase in reservations within just two weeks. Similarly, a B2B Saas company focused on organic marketing by investing in SEO and blog content. This strategic approach helped them rank for competitive keywols and boosted their website traffic by 200% over six months. Some businesses find success by combining both strategies, like an e-commerce retailer that launched a targeted PPC campaign for seasonal sales while simultaneously optimizing product pages for organic search. This hybrid approach resulted in a 30% higher return on investment compared to relying solely on PPC advertising.`

                ]}
            />
            <Lpara
             title="Key Takeaways for Your Marketing Strategy"
                paragraphs={[

                    `PPC is ideal for short-term goals, like promoting sales, events, or new products.`,
                    `Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.`,
                    `A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.`

                ]}
            />
            <Para
                title="Choosing the Best Strategy for Your
                     Business"
                paragraphs={[
                    `Ultimately, the choice between PPC and organic marketing depends on your specific needs, If you're working with a tight deadline or launching a new service, PPC can deliver immediate results. On the other hand, if you're focused on building a loyal audience and maintaining a steady flow of leads, organic marketing is your best bet.`,

                    `By understanding the strengths and limitations of both strategies, you can create a marketing plan that aligns with your goals, budget, and target audience. Ready to take your next step? Start building a strategy that drives results today.`
                ]}
            />
          
        </div>
    );
}