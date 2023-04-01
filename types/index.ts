import { EntryFields, Asset } from 'contentful'

export interface IAboutFields {
  aboutMe: EntryFields.Text
}

export interface IWorkExperienceFields {
  year: EntryFields.Text
  title: EntryFields.Text
  description: EntryFields.Text
}

export interface ISkillsFields {
  icon: EntryFields.Text
  label: EntryFields.Text
}

export interface IProjectsFields {
  title: EntryFields.Text
  description: EntryFields.Text
  demo: EntryFields.Text
  techs: EntryFields.Text[]
  repository: EntryFields.Text
  images: Asset[]
}