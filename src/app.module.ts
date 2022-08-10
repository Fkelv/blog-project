import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog-project', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}
