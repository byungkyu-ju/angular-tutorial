import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id : 11 , name : 'apple'},
      { id : 12 , name : 'banana'},
      { id : 13 , name : 'car'},
      { id : 14 , name : 'door'},
      { id : 15 , name : 'elephant'},
      { id : 16 , name : 'fire'},
      { id : 17 , name : 'grape'}
    ];
    return {heroes};
  }
}
