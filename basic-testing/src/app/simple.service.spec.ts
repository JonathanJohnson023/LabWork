import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service:SimpleService
  beforeEach(() => service = TestBed.get(SimpleService));

  it('should be created', () => {
    const service: SimpleService = TestBed.get(SimpleService);
    expect(service).toBeTruthy();
  });
  it('Should call sayHello', () => {
    let name = 'Bob'
    let greeting = service.sayHello(name)

    expect(greeting).toBe(`Hey ${name}`)
  });
  it('Should add numbers', (done) => {
    service.addNumbers(3,4).subscribe((res) => {
      expect(res).toBe(7)
      done()
    })
  })

});
