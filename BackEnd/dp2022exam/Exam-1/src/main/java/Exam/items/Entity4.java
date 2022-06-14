package Exam.items;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="entity4")

public class Entity4 implements Serializable{
	
	@Id
	@GeneratedValue
	int id;
	String title6;
	int hight;

	
	
	public Entity4() {
		
	}
	
	
	public Entity4(int id, String Title6, int hight) {
		this.id = id;
		this.title6 = Title6;
		this.hight = hight;
	
	}


	public int getHight() {
		return hight;
	}


	public void setHight(int price) {
		this.hight = price;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle6() {
		return title6;
	}
	public void setTitle6(String title6) {
		this.title6 = title6;
	}


	
	
	

}

