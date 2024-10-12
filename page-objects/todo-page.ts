import { Locator, Page } from "@playwright/test";

export class TodoPage {
    private readonly page: Page;
    private readonly header: Locator;
    private readonly newTodo: Locator;
    private readonly todos: Locator;
    private readonly tabCompleted: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText("todos");
        this.newTodo = page.getByPlaceholder("What needs to be done?");
        this.todos = page.locator(".todo-list li");
        this.tabCompleted = page.getByRole('link').and(page.getByText('Completed'));
    }

    async addTodo(todo: string) {
        await this.newTodo.fill(todo);
        await this.page.keyboard.press("Enter");
    }

    async getHeader() {
        return this.header;
    }

    async getTodos() {
        return await this.todos.all();
    }

    async clickTabCompleted() {
        await this.tabCompleted.click();
    }

    async clickCompleteByText(text: string) {
        await this.todos.filter({ hasText: text }).first().getByRole("checkbox").click();
    }
}   