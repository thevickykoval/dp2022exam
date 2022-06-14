package Exam.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import Exam.items.Entity4;


//@RepositoryRestResource(collectionResourceRel = "user1", path = "user")
@RepositoryRestResource
@CrossOrigin(origins = "*")

public interface Entity4Repository extends JpaRepository<Entity4, Integer> {

//  List<User> findByLastName(@Param("name") String name);

}
