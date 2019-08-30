class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
    @articles = Article.all.order('created_at DESC').page(params[:page]).per(9)
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.create(created_params)
    redirect_to root_path
  end

  def show
    @article = Article.find(params[:id])
    respond_to do |format|{
      format.html {render root_path}
      format.json {}
    }
  end

  private
  def created_params
    return params.require(:article).permit(:title, :content, :image).merge(user_id: current_user.id)
  end
end
