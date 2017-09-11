export class Quiz {
  constructor(public id: number,
              public name: string,
              public description: string,
              public owner?: number,
              public image?: string,) {
  }
}
