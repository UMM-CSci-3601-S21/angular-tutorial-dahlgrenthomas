import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
