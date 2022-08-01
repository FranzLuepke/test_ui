import { Alias } from "src/app/models/alias";
import { Tag } from "src/app/models/tag";

const tankTags: Tag[] = [
    {
      name: '12VMIN',
      checked: true,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.1',
      checked: true,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.2',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.3',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.4',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.5',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.6',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.7',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.8',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.9',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.10',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.11',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.12',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.13',
      checked: false,
      aliasName: 'TANK',
    },
    {
      name: 'hfo.service.14',
      checked: false,
      aliasName: 'TANK',
    },
];

const motorTags: Tag[] = [
    {
        name: '12VMIN',
        checked: false,
        aliasName: 'MOTOR',
      },
      {
        name: 'hfo.service.1',
        checked: false,
        aliasName: 'MOTOR',
      },
];

export const ALIAS_WITH_TAGS: Alias[] = [
    {
        name: 'TANK',
        id: 'tank',
        checked: false,
        tags: tankTags,
    },
    {
        name: 'MOTOR',
        id: 'motor',
        checked: false,
        tags: motorTags,
    }
];