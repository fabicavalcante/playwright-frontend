import { Page } from '@playwright/test';

export class BookPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async openPage(){
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async formPage(){
        await this.page.getByRole('textbox', {name: 'First Name'}).fill('Joe')
        await this.page.getByRole('textbox', {name: 'Last Name'}).fill('Lizz')
        await this.page.getByRole('textbox', {name: 'name@example.com'}).fill('abc@gmail.com')
        await this.page.getByRole('textbox', {name: 'Mobile'}).fill('4445556660')
        await this.page.getByRole('textbox', {name: 'Current Address'}).fill('Avenida Paulista, 10 - SP')
        await this.page.getByRole('radio', {name: 'Female'}).check({force: true})
        await this.page.getByRole('checkbox', {name: 'Sports'}).check({force: true})
        await this.page.getByRole('button', { name: 'Submit' }).click()
    }
}