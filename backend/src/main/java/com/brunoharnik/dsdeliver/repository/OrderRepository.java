package com.brunoharnik.dsdeliver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunoharnik.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
