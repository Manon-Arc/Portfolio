const All: string[] = ["IHM", "weatherapp", "danmashi", "IA", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"];
const ProjSysEmb: string[] = ["domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"];
const ProjDev: string[] = ["IHM", "weatherapp", "danmashi", "IA", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo"];

export function selectedCategory(target: HTMLDivElement) {
    const catElements: NodeListOf<Element> = document.querySelectorAll('.category-item');
    const projElements: NodeListOf<Element> = document.querySelectorAll('.project-unit');
    
    catElements.forEach((cat) => {
        cat.classList.remove('selected-category');
    });
    target.classList.add('selected-category');

    projElements.forEach((proj) => {
        const projClasses = Array.from(proj.classList);
        console.log(projClasses)
        let shouldDisplay = false;
        console.log(target.classList[1])

        switch (target.classList[1]) {
            case "ProjSysEmb":
                shouldDisplay = ProjSysEmb.some(category => projClasses.includes(category));
                break;
            case "ProjDev":
                shouldDisplay = ProjDev.some(category => projClasses.includes(category));
                break;
            default:
                shouldDisplay = All.some(category => projClasses.includes(category));
                break;
        }

        if (!shouldDisplay) {
            proj.classList.add('noDisplay');
            proj.classList.remove('Display');
        } else {
            proj.classList.remove('noDisplay');
            proj.classList.add('Display');
        }
    });
}
