export default {
  name: "author",
  title: "autor",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Nome completo",
      type: "string",
      validation: (rule: any) => rule.required()
        .error('O nome é obrigatório')
    },
    {
      name: "avatar",
      title: "avatar",
      type: "image"
    }
  ]
}