export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields:[
    {
      name: "locale",
      title: "Localidade",
      type: "string",
      options:{
        list:[
          {
            title: "Português do Brasil",
            value: "pt-BR"
          },
          {
            title: "UK English",
            value: "en-GB"
          },
          {
            title: "US English",
            value: "en-US"
          },
          {
            title: "Spanish",
            value: "es-es"
          }
        ]
      },
      validation: (rule: any) => rule.required()
        .error('A localidade é obrigatória')
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule: any) => [
        rule.required().error('O titulo é obrigatória'),
        rule.max(60).warning('O título ideal deve conter no máximo 60 caracteres')
      ]
    },
    {
      name: "slug",
      title: "Url do Post",
      type: "slug",
      options:{
        source: "title",
        slugify: (input: string) => input
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
          .replace(/\s+/g, '-')
      },
      validation: (rule: any) => [
        rule.required().error('O slug é obrigatório'),
      ]
        
      
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
      validation: (rule: any) => [
        rule.required().error('A descrição é obrigatória'),
        rule.min(50).warning('A descrição ideal deve conter no mínimo 50 caracteres'),
        rule.max(160).warning('A descrição ideal deve conter no máximo 160 caracteres'),
      ]
    },
    {
      name: "date",
      title: "Data",
      type: "date",
      validation: (rule: any) => rule.required()
        .error('A data é obrigatória')
    },
    {
      name: "coverImage",
      title: "Imagem de Capa",
      type: "image",
      validation: (rule: any) => rule.required()
        .error('A imagem de capa é obrigatória')
    },
    {
      name: "content",
      title: "Conteúdo da Postagem",
      type: 'array',
      of: [
        {
          type: "block",
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
          ]

        },
        {
          title: "Imagem",
          type: "image",
          fields: [
            {
              name: "captions",
              title: "Legenda",
              type: "string",
              options:{
                isHighlighted: true
              }
            }
          ]
        },
        {
          name: "code",
          title: "Code Snippet",
          type: 'code',
          options: {
            theme: 'github',
            withFilename: true
          }
        }
      ],
      validation: (rule: any) => rule.required()
        .error('O conteúdo é obrigatório')
    },
    {
      name: "author",
      title: "Autor",
      type: "reference",
      to: [
        {
          type: 'author'
        }
      ],
      validation: (rule: any) => rule.required()
        .error('O author é obrigatório')
    }

  ]
}