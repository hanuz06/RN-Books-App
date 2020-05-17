class Category {
  categoryName: string;
  id: string;
  color: string;
  constructor(id: string, categoryName: string, color: string) {
    this.id = id;
    this.categoryName = categoryName;
    this.color = color;
  }
}

export default Category;
