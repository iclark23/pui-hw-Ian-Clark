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

const reverseAssumptions = new researchContent("Reverse Assumptions", "Reverse Assumption.jpg", "One of my favorite design methods that you won’t")
const creativeMatrix = new researchContent("Creative Matrix", "Creative Matrix.jpg", "The Creative Matrix is a great design thinking tool that anyone can use to rapidly generate ideas, create shared understanding, and encourage divergent thinking.  There are three key parts to the creative matrix. The first is the “How Might We” statement which zeros in on the problem we are trying to fix and allows everyone to get a shared understanding of the problem space. The next key part is the enablers, which are things or people that will be used to make our ideas happen. These could be technology, people, collaborations, and policies to name a few. There could be as many enablers as you see fit. I really like this design method because it promotes collaborative thinking and forces you to think of unusual solutions.")
const conceptualModel = new researchContent("Conceptual Model","Zillow.jpg","This tool is very important when it comes to UX design. A conceptual model is a high level description of how a system is organized and operates.")
const serviceBlueprint = new researchContent("Service Blueprints","Service Blueprint.jpg","lorem epsum")
researchMethods = [reverseAssumptions, creativeMatrix, conceptualModel, serviceBlueprint]

function designContent(element) {
    const buttonText = element.innerHTML;

    for (methods in researchMethods) {
        if (researchMethods[methods].buttonName === buttonText) {
            document.getElementById("contentImage").src = "./assets/" + researchMethods[methods].image;
            document.getElementById("specialText").innerHTML = researchMethods[methods].content;
        }
    }

}

