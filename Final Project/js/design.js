class designContent {
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
const reverseAssumptions = new designContent("Reverse Assumptions", "Reverse Assumption.jpg", "One of my <b>favorite</b> design methods that you won’t find much information about online is <b>Reverse Assumptions</b>. As humans, we naturally are creatures of habit and like to do things that follow the status quo. This method flips that thinking on its head and forces you to look at problems from the <b>opposite direction</b> and think of alternative assumptions to a problem. This forces you to look at life outside of the norm and fosters divergent thinking. ")
const creativeMatrix = new designContent("Creative Matrix", "Creative Matrix.jpg", "The Creative Matrix is a great design thinking tool that anyone can use to rapidly generate ideas, create shared understanding, and encourage divergent thinking.  There are three key parts to the creative matrix. The first is the <b>“How Might We”</b> statement which zeros in on the problem you are trying to fix and allows everyone to get a shared understanding of the problem space. The next key part is the <b>enablers</b>, which are things or people that will be used to make our ideas happen. These could be technology, people, collaborations, and policies to name a few. There could be as many enablers as you see fit. I really like this design method because it promotes <b>collaborative thinking</b> and forces you to think of unusual solutions. The last part of this whole method and is probably most important is that solutions to these problems. <b>The Ideas!</b>")
const conceptualModel = new designContent("Prototypes","Prototype.jpg","Low Fidelity Prototypes are great because they allow you to test ideas very quickly and don’t require much capital to make. This makes them very important during the creating stage of the design process because you can create multiple prototypes and test them all at once. Which is called <b>Parallel Prototyping</b>. Since they require less time and money to create, we are less likely to get attached to them. This also allows users to give honest feedback regarding designs because of the level of fidelity. People feel more comfortable critiquing soemthing that isn't finished opposed to something that is. You can use different tools to create a prototype from Figma to foam core like I did when i designed this stove for my interaction design class.")
const serviceBlueprint = new designContent("Service Blueprints","Service Blueprint.jpg","One of my favorite tools used to find pain points and design opportunities within a company is a <b>Service Blueprint</b>. It’s a great design method that forces you to look at all the different components that make up a service for a business, even the behind the scene agents who affect the customer's experience, and find out where there might be weaknesses. Even though companies have <b>multiple touchpoints</b> throughout their organization customers usually see it as one overall experience. If you are lacking in one area of your business it will affect the company as a whole. There are 4 main categories that are important when developing a service blueprint and they are the customer journey, frontstage actions, backstage actions, and the support processes. ")
const customerJM = new designContent("Customer Journey Maps","Journey Map.jpg","The Customer Journey map is a tool that is very closely related to the Service Blueprint but it is more focused on the customer and how he/she feels while interacting with a service. This method is great for visually showing how a customer feels and what they are thinking. It is based on the <b>research</b> you did on the customer. The <b>Customer Journey Map</b> method has 4 main parts and they are the journey the customer goes through, their feelings while experiencing the journey, their thought process about the service, and lastly, any design opportunities that you feel could alleviate any frustrations. ")
const storyboard = new designContent("Storyboards","Storyboard.jpg","A storyboard is a method that originated in the film industry and that <b>UX practitioners</b> have adopted over the years. It’s the idea of <b>sketching</b> out key moments of a story that visually represents an idea so your team or stakeholders can get a better understanding of what you are trying to design. I think <b>Storyboards</b> are highly effective because they are considered low fidelity, which fosters honest critique. Also, it’s easier for us to understand new concepts when they are presented to us visually. There are 3 main parts to a Storyboard and they are the context, the solution, and the outcome. Storyboards can be as long or as short as you but you should try to answer those three things when you are sketching one out. ")
const howMightWe = new designContent("How Might We","How Might We.jpg","How Might We is a great design method used to get you and your design team thinking and focused on the correct problem to solve. This <b>divergent thinking </b>process is typically done after you have done your research and <b>extracted</b> key insights. I like to think of How Might We statements as a constant reminder of what you and your team's objective is. When you are writing your <b>How Might We</b> statement you want to consider whether is it based on an existing problem or insight? Does it track a desired outcome? Is it broad enough to ensure many creative ideas?")


designMethods = [reverseAssumptions, creativeMatrix, conceptualModel, serviceBlueprint, customerJM, storyboard, howMightWe]

function designContentDisplay(element) {
    const buttonText = element.innerHTML;

    for (methods in designMethods) {
        if (designMethods[methods].buttonName === buttonText) {
            document.getElementById("designContentImage").src = "./assets/designMethods/" + designMethods[methods].image;
            document.getElementById("designContentImage").alt = "This is an image showcasing a design method";
            document.getElementById("designText").innerHTML = designMethods[methods].content;
        }
    }

}

