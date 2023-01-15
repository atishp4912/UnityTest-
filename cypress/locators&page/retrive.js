import actionsObj from '../utility/actions';
import assertionObj from '../utility/assert';

class retrive{
    get retriveSectn(){
        return cy.get("#ui-id-3")
    }
    get idText(){
        return cy.get("[name=\"id\"]")
    }
    get retriveBTN(){
        return cy.get("#getquote")
    }
    get qutTable(){
        return cy.get("table[border=\"1\"]")
    }
    navRetrive(){
        actionsObj.buttonClick(this.retriveSectn)
    }
    enterId(value){
        actionsObj.inputText(this.idText,value)
    }
    clickRetriveBtn(){
            actionsObj.buttonClick(this.retriveBTN)
    }
    assertTable(param,data){
        assertionObj.assertVisibility(this.qutTable)
        this.qutTable.find('tr').each((el)=>{
            if(el.find('td').first().text().includes(param)){
                cy.wrap(el).find('td').eq(1).should('have.text',data)
                cy.log(param+' found and its value is '+data)
            }
        })
    }
}
let retriveQuotObj=new retrive()
export default retriveQuotObj
