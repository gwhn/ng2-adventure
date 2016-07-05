export class MyData {
  constructor(public id: number, public text: string, public optional?: string) {
    this.optional = optional || 'default';
  }
}
