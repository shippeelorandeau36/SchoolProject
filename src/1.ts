class Student {
  private _name: string;
  private _age: number;
  private _grade: number;

  constructor(name: string, age: number, grade: number) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public getAge(): number {
    return this._age;
  }

  public setAge(age: number): void {
    this._age = age;
  }

  public getGrade(): number {
    return this._grade;
  }

  public setGrade(grade: number): void {
    this._grade = grade;
  }
}
