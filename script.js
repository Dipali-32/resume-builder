function addNewWEField()
{
    // console.log("Adding New Field");
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let weOb=document.getElementById("we")
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewEduField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eduField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let eduOb=document.getElementById("edu")
    let eduAddButtonOb= document.getElementById("eduAddButton");

    eduOb.insertBefore(newNode, eduAddButtonOb)
}

function addNewSoftField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let softOb=document.getElementById("soft")
    let sofAddButtonOb= document.getElementById("sofAddButton");

    softOb.insertBefore(newNode, sofAddButtonOb)
}

function addNewCertField()
{
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('certField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("Placeholder", "Enter Here");


    let certOb=document.getElementById("cert");
    let certAddButtonOb= document.getElementById("certAddButton");
    certOb.insertBefore(newNode, certAddButtonOb);
}

function addNewAchiField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('achiField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let achiOb=document.getElementById("achi")
    let achiAddButtonOb= document.getElementById("achiAddButton");

    achiOb.insertBefore(newNode, achiAddButtonOb);

}

function addNewLangField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('langField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let langOb=document.getElementById("lang")
    let langAddButtonOb= document.getElementById("langAddButton");

    langOb.insertBefore(newNode, langAddButtonOb);

}