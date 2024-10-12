import { test, expect, Page } from '@playwright/test';
import { TodoPage } from '../page-objects/todo-page';

let todoPage: TodoPage;
let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://todomvc.com/examples/react/dist/");
  todoPage = new TodoPage(page);
});

test('Page has expected header', async ({ page }) => {
  await expect(await todoPage.getHeader()).toBeVisible();  
});

test('User can add a todo', async ({ page }) => {
  await todoPage.addTodo("Buy milk");
  const todos = await todoPage.getTodos();
  expect(todos).toHaveLength(1);
  expect(todos[0]).toHaveText("Buy milk");
});

test('User can mark a todo as completed', async ({ page }) => {
  await todoPage.addTodo("Buy chocolate");
  await todoPage.clickCompleteByText("Buy chocolate");
  await todoPage.clickTabCompleted();

  const todos = await todoPage.getTodos();
  expect(todos).toHaveLength(1);
  expect(todos[0]).toHaveText("Buy chocolate");
});

test.afterAll(async () => {
  await page.close();
});