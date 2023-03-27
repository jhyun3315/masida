// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { cocktail_summary } from '../../type/cocktailTypes';

const data: cocktail_summary[] = [];

const RaidarBar = (props: cocktail_summary[]) => {
  for (let i = 0; i < 3; i++){
    data.push({ id: props[i].id, data:props[i].data});
  }

  return (
    <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
    <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        colors={['#E8C1A0','#F4E77E','#F79D8E']} 
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 150,
                translateY: 120,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}

export default RaidarBar;