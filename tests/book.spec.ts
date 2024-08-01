import {test, expect} from '@playwright/test'
import {BookPage} from '../page-objects/BookPage'

test.beforeEach(async ({page}) => {
  const navigateTo = new BookPage (page)
  await navigateTo.openPage()
})

test('Student form', async({page}) => {
    const navigateTo = new BookPage (page)
    await navigateTo.formPage()
  }
)
