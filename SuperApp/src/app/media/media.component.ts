import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  public url = `http://127.0.0.1:8000`;
  audio: any;
  video: any;
  audios: string;
  videos: any;
  constructor(private http: HttpClient,private toast:ToastService) {
    this.getAudio();
    this.getVideo();
  }
  ngOnInit() {
  }
  public async getAudio() {
    await this.http.get(`${this.url}/api/sermons`).subscribe(res =>{ this.audio = res; this.toast.info('Chrome is recomended for better user experience.')});
  }
  public async getVideo() {
    await this.http.get(`${this.url}/api/videos`).subscribe(res => this.video = res);
  }


  public result(res: any) {
    return `${res.name}`;
  }

  public searchAudio() {
    if (this.audios == "") {
      this.getAudio();
    } else {
      this.audio = this.audio.filter(res => {
        return this.result(res).toLocaleLowerCase().match(this.audios.toLocaleLowerCase());
      })
    }
  }

  public set(res) {
    return `${res.name}`;
  }

  public searchVideo() {
    if (this.videos == "") {
      this.getVideo();
    } else {
      this.video = this.video.filter(res => {
        return this.set(res).toLocaleLowerCase().match(this.videos.toLocaleLowerCase());
      })
    }
  }
  public download(path: any) {
    return window.location.href = path;
  }



}
