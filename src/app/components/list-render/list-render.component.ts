import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalsDetails = "";

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }

  showAge(animal: Animal){
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
   this.animals = this.animals.filter((a) => animal.name !== a.name)
   this.listService.remove(animal.id).subscribe();
  }
}
