import { type ColumnDef, columnDefBuilder } from '@/shared/lib/table';
import { Text } from '@/shared/ui/kit/text';

import { Businesses } from '../../types';

export const restrictedBusinesses: Businesses[] = [
  {
    definition: 'Growing of spices, aromatic, drug and pharmaceutical crops',
  },
  { definition: 'Manufacture of fertilizers and nitrogen compounds' },
  { definition: 'Manufacture of pesticides and other agrochemical products' },
  { definition: 'Manufacture of other chemical products n.e.c.' },
  { definition: 'Manufacture of basic pharmaceutical products' },
  { definition: 'Manufacture of pharmaceutical preparations' },
  { definition: 'Striking of coins' },
  { definition: 'Manufacture of jewellery and related articles' },
  { definition: 'Sale of used cars and light motor vehicles' },
  { definition: 'Sale of other motor vehicles' },
  {
    definition:
      'Sale, maintenance and repair of motorcycles and related parts and accessories',
  },
  {
    definition:
      'Agents involved in the sale of fuels, ores, metals and industrial chemicals',
  },
  { definition: 'Wholesale of pharmaceutical goods' },
  { definition: 'Wholesale of watches and jewellery' },
  { definition: 'Wholesale of chemical products' },
  { definition: 'Retail sale of watches and jewellery in specialised stores' },
  { definition: 'Retail sale in commercial art galleries' },
  { definition: 'Retail sale of antiques including antique books in stores' },
  { definition: 'Banks' },
  { definition: 'Building societies' },
  { definition: 'Activities of agricultural holding companies' },
  { definition: 'Activities of production holding companies' },
  { definition: 'Activities of construction holding companies' },
  { definition: 'Activities of distribution holding companies' },
  { definition: 'Activities of financial services holding companies' },
  { definition: 'Activities of other holding companies n.e.c.' },
  { definition: 'Activities of investment trusts' },
  { definition: 'Activities of unit trusts' },
  { definition: 'Activities of venture and development capital companies' },
  { definition: 'Activities of open-ended investment companies' },
  { definition: 'Activities of property unit trusts' },
  { definition: 'Activities of real estate investment trusts' },
  { definition: 'Financial leasing' },
  {
    definition:
      'Credit granting by non-deposit taking finance houses and other specialist consumer credit grantors',
  },
  { definition: 'Activities of mortgage finance companies' },
  { definition: 'Other credit granting n.e.c.' },
  { definition: 'Security dealing on own account' },
  { definition: 'Factoring' },
  { definition: 'Financial intermediation not elsewhere classified' },
  { definition: 'Life insurance' },
  { definition: 'Non-life insurance' },
  { definition: 'Life reinsurance' },
  { definition: 'Non-life reinsurance' },
  { definition: 'Pension funding' },
  { definition: 'Administration of financial markets' },
  { definition: 'Security and commodity contracts dealing activities' },
  { definition: 'Activities auxiliary to financial intermediation n.e.c.' },
  { definition: 'Risk and damage evaluation' },
  { definition: 'Activities of insurance agents and brokers' },
  { definition: 'Other activities auxiliary to insurance and pension funding' },
  { definition: 'Fund management activities' },
  { definition: 'Financial management' },
  { definition: 'Gambling and betting activities' },
  { definition: 'Activities of religious organisations' },
  { definition: 'Activities of political organisations' },
  { definition: 'Repair of watches, clocks and jewellery' },
  { definition: 'Online pharmaceuticals stores' },
];

export const restrictedBusinessesColumns: ColumnDef<Businesses>[] =
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
      cell: ({ getValue }) => (
        <Text size="sm" weight={500}>
          {getValue<string>()}
        </Text>
      ),
    },
  ]);
