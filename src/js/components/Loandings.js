
const queryContentLoandig=document.querySelector("#content-loandin")
const loading=document.createElement("div")
loading.className="spinner"

export const Loadings=()=>{

    if (queryContentLoandig.firstChild != loading) {
        queryContentLoandig.appendChild(loading)
        setTimeout(() => {
            queryContentLoandig.removeChild(loading)
        }, 5000);
    }
}



