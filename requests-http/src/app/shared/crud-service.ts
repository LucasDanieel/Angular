import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs';

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: any) {}

  list(){
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000)
      );
  }

  loadByID(id: number){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(curso: any){
    return this.http.post(this.API_URL, curso).pipe(take(1));
  }

  private update(curso: any){
    return this.http.put(`${this.API_URL}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: any){
    if(curso.id){
      return this.update(curso);
    }
    return this.create(curso);
  }

  remove(id: any){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
