import {string} from "postcss-selector-parser";

export interface NavItem {
  label: string;
  to: string;
}

export interface FaqItem {
  title: string
  text: string
}

export interface InfoItem {
  title: string
  text: string
  img: string
}

export interface StreamerItem {
  name: string;
  logo: 'twitch' | 'youtube';
  video: string;
}

export interface ProcessItem{
  index:number
  title:string
  logo:string
  text:string
}

export interface InfoProcessItem {
  title:string
  text:string
}

export interface FooterItem {
  title:string
  link:string
}