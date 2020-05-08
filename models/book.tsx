
class Books {
  constructor(
    id: string,
    title: string,    
    ownerId: string,
    pageCount: number,
    publishedDate: string,
    thumbnailUrl: string,
    description: string,
    status: string,
    authors: [string],
    categories: [string]
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.pageCount = pageCount;
    this.publishedDate = publishedDate;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
    this.description = description;
    this.status = status;
    this.authors = authors;
    this.categories = categories;
  }
}

export default Product;
