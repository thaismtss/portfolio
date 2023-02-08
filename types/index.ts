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
  images: Asset[]
}