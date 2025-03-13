class Student {
    private name: string;
    private age: number;
    private grade: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }
    
    public getAge(): number {
        return this.age;
    }
    
    public setAge(age: number): void {
        this.age = age;
    }
    
    public getGrade(): number {
        return this.grade;
    }
    
    public setGrade(grade: number): void {
        this.grade = grade;
    }
}
