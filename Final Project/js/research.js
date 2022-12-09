class researchContent {
    buttonName;
    image;
    content;

    constructor(buttonName, image, content) {
        this.buttonName = buttonName;
        this.image = image;
        this.content = content;
    }
}
// add image and descriptions
const backgroundResearch = new researchContent("Background Research", "Background.jpg", "Background Research is one of the <b>first</b> steps in your research process. This is the process of searching for information about a problem space by reading articles, watching interviews, and analyzing research papers that have been written by <b>credible sources</b>. There’s a lot of information online that you can find that will give you a solid foundation on the topic you are starting to explore. This will give you a good idea of what's going on in the industry and the pain points that have already been explored by qualified professionals. ")
const userInterviews = new researchContent("User Interviews", "Script.jpg", "User interviews are the process of interviewing people who will potentially use whatever it is that you are designing. The purpose of this is to get a better understanding of their needs and pain points so you can develop a feature or product that they didn’t even know they needed. The first thing you need to do is develop a <b>script</b>. It's basically your blueprint for conducting the interview and consists of an <b>opening statement</b>, <b>pre-written questions</b>, and some other method that is used to get the participant to <b>think critically</b>. There is a multitude of methods that you can use while you are conducting a user interview like a Think Aloud, Card Sorting, Tell Me A Story, and Think Alouds. ")
const cardSorting = new researchContent("Card Sorting","Card Sorting.jpg","Card Sorting is the process of giving the study participant a list of words that are <b>relevant</b> to a domain and having them sort out which is most / least important. For example, in my user-centered research class at Carnegie Mellon, we had a <b>Card Sorting</b> session where we told the participants to rank a group of words based on priority that was centered around traveling and working remotely.")
const directedStorytelling = new researchContent("Directed Storytelling","Story.jpg","This research method is excellent when you are interviewing a user and you are looking for a <b>creative way</b> to get them to recall something. It is a very simple method that allows designers to gather rich stories of <b>lived experiences</b> from your study participants. Researchers ask the participant to tell them a personal story about a specific topic. For example “Tell me about a time when you had to plan a vacation with friends”. Sometimes <b>direct observation</b> of a group of people isn’t feasible because of time or money constraints, so directed storytelling is used as a substitute. Directed storytelling is likely used with another research method like card sorting or usability testing to further gather more information. ")
const competitiveAnalysis = new researchContent("Competitive Analysis","Competitive Analysis.jpg","When you start the process of researching there’s a good chance that you are going to need to look at your <b>competitors</b> to see how they are doing things. A competitive analysis is when you research five to six companies and look at different aspects of the company that is <b>relevant</b> to what you are designing or looking to research. I like to look at three companies that are on the same level as the company you are designing for and three more companies that are further along in their business life cycle. ")
const affinityDiagram = new researchContent("Affinity Diagram","Affinity.jpg","The Affinity Diagram method is great research and brainstorming method. It is used after you and your team conduct some type of <b>research</b> and you need to organize what you have found. After you conduct your research you put your notes on either a whiteboard or an online application like Miro. You then look at each person’s individual notes and group them into <b>similar themes</b>. The most important thing you should remember when you are doing an <b>Affinity Diagram</b> is you never pre-write the categories prior to organizing each individuals notes, you let the data tell you what categories should be made. Affinity Diagrams help you synthesize information and find insights.")

researchMethods = [backgroundResearch, userInterviews, cardSorting, directedStorytelling, competitiveAnalysis, affinityDiagram]

function researchContentDisplay(element) {
    const buttonText = element.innerHTML;


    for (methods in researchMethods) {
        if (researchMethods[methods].buttonName === buttonText) {
            document.getElementById("researchContentImage").src = "./assets/researchMethods/" + researchMethods[methods].image;
            document.getElementById("researchContentImage").alt = "This is an image showcasing a research method";
            document.getElementById("researchText").innerHTML = researchMethods[methods].content;
        }
    }

}