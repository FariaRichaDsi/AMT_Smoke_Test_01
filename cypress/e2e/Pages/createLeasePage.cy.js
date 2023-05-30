export class CreateLeasePage {
    CreateLeasePage() {

    }
    selectType() {
        
        cy.get(':nth-child(3) > .control-Panel > .k-picker > .k-input-button').type('{downArrow}').type('{downArrow}')
        cy.get('#selectContract_Ok').click({ force: true })
    }
    // enterLocationName(locationName){
    //     cy.get(':nth-child(1) > .form-element > .editMode > .k-input > .k-input-inner').type(locationName)
    //     cy.wait(2000)
    //     cy.get(':nth-child(1) > .form-element > .editMode > .k-input > .k-input-button').click().type('{downArrow}').type('{enter}')
    //     cy.wait(3000)
    // }
    setDBAName(dbaName) {
        cy.get('.editMode').eq(26).type(dbaName)
    }
    setLeaseCode(leaseCode) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Lease_Code').type(leaseCode)
    }
    selectLeaseStatus(status) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Lease_Status').click({ force: true }).type('{downArrow}', { force: true }).type('{enter}', { force: true })
    }
    selectLeaseType(leaseType) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Lease_Type').click({ force: true }).type('{downArrow}', { force: true }).type('{enter}', { force: true })
    }
    selectBillingType(billingType) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Lease_Billing_Type').click({ force: true }).type('{downArrow}', { force: true }).type('{enter}', { force: true })
    }
    selectReportingCurrency(currency) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__ReportingCurrency').select(currency)
    }
    setLegalName(legalName) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Legal_Name').type(legalName)
    }
    setOccupentCode(occupentCode) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__ACCT_LEASE_ID').type(occupentCode)
    }
    selectStatusOnExp(statusOnExp) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__LEASE_STATUS_AFTER_EXPIRED').select(statusOnExp)
    }
    setOrigTermBegin(termBegin) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Begin_Date').type(termBegin)
    }
    setExpDate(expDate) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Expiration_Date').type(expDate)
    }
    setExecutionDate(executionDate) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Execution_Date').type(executionDate)
    }
    setRendStartDate(rentStart) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Rent_Start_Date').type(rentStart)
    }
    setVacateDate(vacateDate) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Rent_Start_Date').type(vacateDate)
    }
    setCurrTermBegin(currTerm) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Occupancy_Date').type(currTerm)
    }
    setPossesionDate(possDate) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__Possession_Date').type(possDate)
    }
    selectContractTerm(contractTerm) {
        cy.get('#13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__LeaseGroup1Id').select(contractTerm)
    }
    clickSave() {
        cy.get('.divLeaseArea > .a-modal-container > .panel-footer > .FormSaveButton').click()
    }


}