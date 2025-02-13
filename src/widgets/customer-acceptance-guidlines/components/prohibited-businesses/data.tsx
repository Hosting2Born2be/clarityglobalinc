import { type ColumnDef, columnDefBuilder } from '@/shared/lib/table';
import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { Businesses } from '../../types';

export const prohibitedBusinesses: Businesses[] = [
  {
    definition: (
      <div>
        <Text size="sm" weight={500}>
          Adult entertainment, website or contents such as:
        </Text>
        <List
          textWeight={500}
          textSize="sm"
          values={[
            'Adult escorts, prostitution services and massage parlours',
            'Child pornography',
            'Bestiality',
            'Forced Sex/Rape',
            'Violence/Humiliation',
            'Male or female sexual enhancement supplements or products',
            'Video texting or paid subscriptions to live-streaming where it involves adult erotic content or conversations',
            'Gentleman’s clubs, strip clubs and topless bars',
          ]}
        />
      </div>
    ),
  },
  { definition: 'Counterfeit items' },
  { definition: 'Credit repair services' },
  { definition: 'Drugs or drug proprietors selling illegal substances' },
  {
    definition:
      'Drug paraphernalia that involves equipment designed for making or using drugs',
  },
  { definition: 'Marijuana, CBD/THC related products and businesses' },
  { definition: 'Human remains and body parts' },
  { definition: 'Human trafficking' },
  { definition: 'Child exploitation' },
  { definition: 'Wildlife trade' },
  { definition: 'Products and services facilitating animal cruelty' },
  { definition: 'Mail-order brides services' },
  { definition: 'Poisonous and hazardous materials' },
  {
    definition:
      'Products/services promoting abuse, hatred, racism, religious persecution, terrorism, violence or contain offensive content',
  },
  { definition: 'Pyramid or ponzi schemes' },
  { definition: 'Sanction list inclusions (global)' },
  { definition: 'Shell banks and companies' },
  {
    definition:
      'Signal jammers/blockers that interferes with cellular/communication devices',
  },
  {
    definition:
      'Products and services that infringe intellectual property rights',
  },
  {
    definition: 'Mining and extraction of minerals, precious metals and stones',
  },
  { definition: 'Surrogacy services' },
  { definition: 'Tattoo parlors' },
  {
    definition:
      'Trade of weapons, ammunitions, military armaments, explosive devices and firearm parts',
  },
  { definition: 'Corporates with bearer share' },
  { definition: 'Timeshare services' },
  { definition: 'Pawn shops' },
  { definition: 'Non-governmental organizations' },
  {
    definition:
      'Generation, distribution and transmission of nuclear power, processing of nuclear fuel',
  },
  {
    definition:
      'Get rich quick schemes including investment opportunities or other services that promise high rewards to mislead consumers; schemes that claim to offer high rewards for very little effort or upfront work; sites that promise fast and easy money. Remote computer assistance',
  },
  { definition: 'Manufacture of explosives' },
  { definition: 'Manufacture of mortars' },
  { definition: 'Manufacture of weapons and ammunition' },
  { definition: 'Manufacture of military fighting vehicles' },
  { definition: 'Illegal business on any type' },
  {
    definition:
      'Business where Director and/ or UBO and or/ Shareholder and/ or Senior management representative are subject to sanctions',
  },
  {
    definition:
      'Business where Director and/ or UBO and or/ Shareholder and/ or Senior management representative is a Politically exposed person (PEP)',
  },
];

export const prohibitedBusinessesColumns: ColumnDef<Businesses>[] =
  columnDefBuilder([
    {
      accessorKey: 'index',
      header: '№',
      cell: ({ row }) => (
        <Text size="sm" weight={500}>
          {row.index + 1}
        </Text>
      ),
      size: 60,
    },
    {
      accessorKey: 'definition',
      header: 'Definition',
      cell: ({ getValue }) => {
        const value = getValue();

        return typeof value === 'string' ? (
          <Text size="sm" weight={500}>
            {getValue<string>()}
          </Text>
        ) : (
          value
        );
      },
    },
  ]);
