class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
    @articles = [*1..20]
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.create(created_params)
  end

  private
  def created_params
    return params.require(:article).permit(:title, :content, :image).merge(user_id: current_user.id)
  end
end
